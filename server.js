const PROJECT = "fjord-pantry-api-bay";
const PROFILE = "0008";
function run(value = 'ready') {
  return { project: PROJECT, profile: PROFILE, value };
}
console.log(run());
