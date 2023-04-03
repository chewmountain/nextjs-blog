import Link from "next/link";

import utilStyles from "../styles/utils.module.css";

export default function Page404() {
  return (
    <center>
      <h1 className={`${utilStyles.headingLg} ${utilStyles.lightText}`}>
        Error 404. Page not found.
      </h1>
      <Link href="/">← Go home</Link>
    </center>
  );
}
