import Raindrop from "lib/raindrop";
import ms from "ms";
import { startOfWeek, format } from "date-fns";
import BookmarkLayout from "components/bookmark-layout";

function BookmarkPage({ data, year }) {
  return <BookmarkLayout data={data} year={year} onlyThisWeek />;
}

export async function getStaticProps() {
  const dateStartOfWeek = startOfWeek(new Date(), { weekStartsOn: 1 });
  const date = format(dateStartOfWeek, "yyyy-MM-dd");

  const raindrop = new Raindrop(date);
  const { data, year } = await raindrop.getGroupedBookmarks();

  return {
    props: { data, year },
    revalidate: ms("1h") / 1000,
  };
}

export default BookmarkPage;
