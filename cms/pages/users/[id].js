import Link from 'next/link';
import { useRouter } from 'next/router';

const UsersDetailPage = () => {
  const router = useRouter();
  return (
    <div>
      <h3>User #{router.query.id}</h3>
      <p>Lorem ipsum</p>
      <Link href='/'>
        <a>Back to cms</a>
      </Link>
    </div>
  );
};

export default UsersDetailPage;
