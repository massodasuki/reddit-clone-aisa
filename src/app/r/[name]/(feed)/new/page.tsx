import Feed from '@/components/feed-layout/Feed/Feed';
import FeedFilter from '@/components/feed-layout/FeedFilter/FeedFilter';

const page = ({ params: { name } }: { params: { name: string } }) => {
	return (
		<>
			<FeedFilter highlighted="new" prefix={`r/${name}`} />
			<Feed type="new" communityName={name} />
		</>
	);
};

export default page;