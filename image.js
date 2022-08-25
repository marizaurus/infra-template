const fetch = require("node-fetch");
const exec = require("@actions/exec");

const { TAG, TICKET_ID, AUTH_TOKEN, ORG_ID } = process.env;
const headers = {
  Authorization: `OAuth ${AUTH_TOKEN}`,
  'X-Org-ID': ORG_ID,
};

const main = async () => {
  await exec.exec('docker', ['build', '-t', `app:${TAG}`, '.']);
  console.log('Listen on port 3000');

  await fetch(`https://api.tracker.yandex.net/v2/issues/${TICKET_ID}/comments`, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      text: `Собрали образ с тегом ${TAG}`
    })
  });
}

main().then(() => console.log('Comment added'));