import Feed from '@/components/Feed/Feed';
import React from 'react';

const page = async ({ params: { name } }: { params: { name: string } }) => {
	return (
		<div className="flex-1  min-h-[calc(100vh-48px)]">
			<div className="flex gap-6 justify-center sm:px-6 pt-6">
				<div className="w-full lg:max-w-[640px]">
					<Feed type="best" topicName={name} />
				</div>
				<div className="w-[312px] hidden lg:block flex-shrink-0">
					<div>Most popular communities in this topic</div>
				</div>
			</div>
		</div>
	);
};

export default page;
