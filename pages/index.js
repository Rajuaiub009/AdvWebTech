import Link from "next/link";

export default function Home() {
  return (
    <>
    <center>
    <h2>Author Dashboard</h2> <br></br>
    <Link href="Author/getauthor/">Author's List</Link><br></br><br></br>
    <Link href="Author/geteditor/">Editor's List</Link><br></br><br></br>
    <Link href="Author/getnews/">News List</Link><br></br><br></br>
    <Link href="Author/findauthor/">Search Author</Link><br></br><br></br>
    <Link href="Author/findeditor/">Search Editor</Link><br></br><br></br>
    <Link href="Author/findnews/">Search News</Link><br></br><br></br>
    </center>
    </>
  )
}
