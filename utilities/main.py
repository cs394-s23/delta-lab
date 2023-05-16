import csv
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore


# Initialize Firebase
cred = credentials.Certificate("config.json")
firebase_admin.initialize_app(cred)
db = firestore.client()

filename = "Playlist  - Sheet1.csv"  # Replace with the actual file name and location

# with open(filename, "r") as file:
#     reader = csv.reader(file)
#     total_data = {}
#     for row in reader:
#         book_title = row[0]
#         # Process the book title or perform any desired actions
#         traits = []
#         for i in range(1, 13):
#             if row[i]:
#                 traits.append(True)
#             else:
#                 traits.append(False)
#
#         total_data[book_title] = traits
#         print(book_title, traits)

import openpyxl

# Load the Excel file
workbook = openpyxl.load_workbook("Playlist .xlsx")
sheet = workbook.active

db.collection("testResources")
db.collection("testSkills")

tupleArr = []

traitsArr = [
    "Professionalism",
    "Integrity/Trustworthiness",
    "Treat others with respect/courtesy",
    "Listen Attentively & Respectfully",
    "Respond Promptly",
    "Multitasking",
    "Using & Evaluating Tech Tools",
    "Adapting Work Habits",
    "Legal Research",
    "Identity & Gather Facts and Legal Issues",
    "Draft Pleadings Motions Briefs",
    "Request/Produce Discovery"
  ]

# Iterate through the rows
for row in sheet.iter_rows(min_row=1):
    first_row = row[0]
    total_data = {}
    doc_data = {}
    medias = ["book", "collection of articles", "TED Talk", "assessments", "online course", "virtual bootcamp", "podcast", "praktio course", "praktio workshop"]
    if first_row.hyperlink:
        hyperlink = first_row.hyperlink.target
        title = first_row.value

        idx = title.rfind('(')
        title1 = title[:idx - 1]

        display_text = first_row.value.lower()
        currMediaType = None
        for media in medias:
            if media in display_text:
                currMediaType = media

        # print(f"Hyperlink: {hyperlink}")
        # # print(f"Display Text: {display_text}")
        # print(f"Media Type: {currMediaType}")
        # print("Title", title1)
        total_data["link"] = hyperlink
        total_data["media"] = currMediaType
        total_data["name"] = title1
    currTraits = []
    if len(total_data) == 3:
        print(total_data)
        for i in range(1, 13):
            if row[i].value == "x":
                currTraits.append(True)
            else:
                currTraits.append(False)
        total_data["skills"] = currTraits
        doc_ref = db.collection("testResources").document()
        doc_ref.set(total_data)
        tupleArr.append((total_data, doc_ref))



    # print("curr traits", currTraits)

        print()

arrTwelveDicts = [{} for i in range(12)]
for i in range(12):
    arrTwelveDicts[i]['resources'] = []
    arrTwelveDicts[i]["name"] = traitsArr[i]
    for data, ref in tupleArr:
        if data["skills"][i]:
            arrTwelveDicts[i]["resources"].append(ref)

    doc_ref = db.collection("testSkills").document(str(i))
    doc_ref.set(arrTwelveDicts[i])





# Close the workbook
workbook.close()

