import { gql, useQuery } from '@apollo/client';
import { Community, User } from '@prisma/client';

type UserQueryResponse = {
	user: {
		communities: {
			id: Community['id'];
			name: Community['name'];
			members: {
				id: User['id'];
			}[];
		}[];
	};
};

export const UserQuery = gql`
	query {
		user {
			communities {
				id
				name
				members {
					id
				}
			}
		}
	}
`;

export default function useUserCommunities() {
	return useQuery<UserQueryResponse>(UserQuery);
}
