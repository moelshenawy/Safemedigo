import { useRouter } from "next/router";
import Pagination from "@mui/material/Pagination";

export default function BlogPage({ page }) {
  const router = useRouter();
  const handleChangePage = (event, newPage) => {
    router.push(`/blogs/page/${newPage}`);

    if (newPage === 1) {
      router.push(`/blogs/`);
    }
  };

  return (
    <div>
      <h1>Blog Page {page}</h1>
      <Pagination
        count={10}
        page={parseInt(page)}
        onChange={handleChangePage}
      />
    </div>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  console.log(context);
  return {
    props: {
      page: params.page,
    },
  };
}
