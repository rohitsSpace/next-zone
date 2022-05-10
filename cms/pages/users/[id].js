import Link from 'next/link';
import Head from 'next/head';
import ErrorPage from 'next/error';
import { useRouter } from 'next/router';

const UsersDetailPage = ({ user }) => {
  const router = useRouter();
  if (!router.isFallback && !user?.id) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <div>
      <Head>
        <title>{user?.name} | Next.js Blog Example with</title>
        {/* <meta
          property='og:image'
          content={post.featuredImage?.node?.sourceUrl}
        /> */}
        <meta name='og:type' content='website' />
        <meta name='description' content={user?.name} />
        <meta name='og:title' content={user?.username} />
        <meta name='description' content={user?.name} />
        {/* <meta name='keywords' content={keyword} /> */}
        {/* <meta name='og:url' content={url} /> */}
        {/* <meta name='og:description' content={description} /> */}
        {/* <meta name='og:image' content={image} /> */}
      </Head>
      <h3>User #{user?.name}</h3>
      <p>Lorem ipsum</p>
      <Link href='/'>
        <a>Back to cms</a>
      </Link>
    </div>
  );
};

export default UsersDetailPage;

export async function getStaticProps({ params }) {
  const user = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  ).then((res) => res.json());
  return {
    props: { user },
  };
}

export async function getStaticPaths() {
  const users = await fetch('https://jsonplaceholder.typicode.com/users').then(
    (res) => res.json()
  );
  return {
    paths: users.map(({ id }) => `/users/${id}`) || [],
    fallback: true,
  };
}
