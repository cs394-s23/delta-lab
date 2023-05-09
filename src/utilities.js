import { getResourcesBySkill } from "./firebase";
/*
props.top = [1,2,3]

res = getResourcesBySkill(1,2,3);  --> list of paths

scores = {}

for skill in skills
    for res in getresourcesbyskill(skill)
        if scores[res]
            scores[res] ++
        else
            scores[res] = 1

*/
export async function getTop5Resources(skills) {
    const scores = {};
    await Promise.all(skills.map(async (skill) => {
        const resources = await getResourcesBySkill(skill);
        resources.map( (res) => {
            if (scores[res]) {
                scores[res] +=1;
            } else {
                scores[res] = 1;
            }
        });
    }));

    const sortedScores = Object.entries(scores)
        .sort((a, b) => b[1] - a[1])
        .reduce((obj, [key, value]) => {
            obj[key] = value;
            return obj;
    }, {});

    const top5 = Object.keys(sortedScores).slice([0, Math.min(4, sortedScores.length)]);

    console.log("top5");
    console.log(top5);

    return top5;
}
