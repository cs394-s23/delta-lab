import { getResourcesBySkill } from "./firebase";

// gets the top 5 resources based on the lowest spider graph skills
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
    
    const top5 = Object.keys(sortedScores).slice(0, Math.min(5, Object.keys(sortedScores).length));

    
    
    return top5;
}
