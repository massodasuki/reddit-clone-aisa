import React from 'react';
import VoteSection from '../VoteSection/VoteSection';

const PostSkeleton = () => {
	return (
		<div className="w-full flex border-border-post border rounded hover:border-border-post-hover cursor-pointer overflow-hidden">
			<div className="bg-background-post-side p-2 hidden sm:block">
				<VoteSection
					type="post"
					postId=""
					direction="column"
					initialKarma={0}
					initialVote={undefined}
				/>
			</div>
			<div className="bg-background-primary flex-1 p-2">
				<div className="animate-pulse">
					<div className="h-4 bg-gray-300 rounded mb-4 max-w-[250px]"></div>
					<div className="h-5 bg-gray-300 rounded mb-4 max-w-sm"></div>
					<div className="h-48 bg-gray-300 rounded"></div>
				</div>
			</div>
		</div>
	);
};

export default PostSkeleton;
