// https://school.programmers.co.kr/learn/courses/30/lessons/49993

function solution(skill, skill_trees) {
  let answer = 0;

  const skillArr = skill.split('');

  for (let i = 0; i < skill_trees.length; i++) {
    let flag = true;
    const copySkillArr = skillArr.slice();
    const eachSkillTree = skill_trees[i].split('');

    for (let j = 0; j < eachSkillTree.length; j++) {
      if (copySkillArr.indexOf(eachSkillTree[j]) === 0) {
        copySkillArr.shift();
      } else if (copySkillArr.indexOf(eachSkillTree[j]) > 0) {
        flag = false;
        break;
      } else if (copySkillArr.indexOf(eachSkillTree[j]) === -1) continue;
    }

    if (flag) answer++;
  }

  return answer;
}

const skill = 'CBD';
const skill_trees = ['CED'];
// const skill_trees = ['BACDE', 'CBADF', 'AECB', 'BDA'];

console.log(solution(skill, skill_trees));
