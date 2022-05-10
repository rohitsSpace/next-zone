import Link from 'next/link';
const CMSIndex = ({ users }) => {
  return (
    <div>
      <h3>THis is from CM bbS</h3>
      {users.map((u) => (
        <li key={u.id}>
          <Link href={`/users/${u.id}`}>{u.name}</Link>
        </li>
      ))}
    </div>
  );
};

export default CMSIndex;
export async function getStaticProps({}) {
  const users = await fetch('https://jsonplaceholder.typicode.com/users').then(
    (res) => res.json()
  );
  return {
    props: { users },
  };
}
