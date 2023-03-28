import LinkList from "@/components/LinkList";
import useLinkStore from "@/store/links";
import { useRouter } from "next/router";

export default function () {
  const router = useRouter();
  const { links } = useLinkStore();

  const linksByCollection = links.filter(
    (e) => e.collectionId === Number(router.query.id)
  );

  return (
    // ml-80
    <div className="p-5 flex flex-col gap-5 w-full">
      {linksByCollection.map((e, i) => {
        return <LinkList key={i} link={e} count={i} />;
      })}
    </div>
  );
}
