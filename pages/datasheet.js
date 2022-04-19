import { google } from 'googleapis';
import Link from 'next/link';
import { read, utils, WorkSheet, writeFile } from "xlsx";

export async function getServerSideProps({ query }) {

  const auth = await google.auth.getClient({ scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'] });

  const sheets = google.sheets({ version: 'v4', auth });

  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.SHEET_ID,
    range: 'الدليل !G7:J17',
  });

  const posts = response.data.values;
  const postsy = JSON.stringify(response.data.values);
  const [r1, r2, r3, r4] = response.data.values;
  const JsonObject = JSON.stringify(Object.assign({}, posts));
  return {
    props: {
      posts,
      postsy,
      JsonObject,
    },
  };
}

export default function Post({ posts, postsy, JsonObject }) {
  return (
    <article>
      <h1>Posts</h1>
      <ul>
        {posts.map((v, i) => (
          <li key={i}>
            <Link href={`/posts/${i + 7}`}>
              <a>{v}</a>
            </Link>
          </li>
        ))}
      </ul>
{console.log(JsonObject)}
    </article>
  );
}