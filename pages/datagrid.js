import DataGrid from 'react-data-grid';
import { google } from 'googleapis';

export async function getServerSideProps({ query }) {

  const auth = await google.auth.getClient({ scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'] });

  const sheets = google.sheets({ version: 'v4', auth });

  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.SHEET_ID,
    range: 'الدليل !G7:H17',
  });

  const posts = response.data.values;
  return {
    props: {
      posts,
    },
  };
}

const columns = [
  { key: 'id', name: 'id' },
  { key: 'title', name: 'Title' }
];

const columnsy = ['id', 'title'
];

const rows = [
  { id: 0, title: 'Example' },
  { id: 1, title: 'Demo' }
];

function rowKeyGetter(row) {
  return row.id;
}

export default function App({posts}) {
  return (
    <>
    <DataGrid columns={columns} rows={posts} rowKeyGetter={rowKeyGetter}/>
      {console.log(JSON.stringify(Object.assign({"id":{}}, posts)))}
    </>
  );
}