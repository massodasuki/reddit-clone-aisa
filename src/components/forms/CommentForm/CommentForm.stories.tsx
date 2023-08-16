import { Meta, StoryObj } from '@storybook/react';
import CommentForm, { CreateCommentMutation } from './CommentForm';
import '../../../app/globals.css';

const meta: Meta<typeof CommentForm> = {
	title: 'Forms/CommentForm',
	component: CommentForm,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CommentForm>;

export const Default: Story = {
	parameters: {
		nextAuthMock: {
			session: {
				data: {
					user: {
						id: 999,
						email: 'user@local',
						name: 'John Doe',
					},
				},
				status: 'unauthenticated',
			},
		},
		apolloClient: {
			mocks: [
				{
					request: {
						query: CreateCommentMutation,
					},
					result: {
						data: {
							viewer: null,
						},
					},
				},
			],
		},
	},
};
