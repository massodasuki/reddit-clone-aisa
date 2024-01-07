import Providers from '@/components/Providers';
import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '@/components/layout/Navbar/Navbar';
import { Toaster } from 'react-hot-toast';
import { getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]/route';
import Sidebar from '@/components/layout/Sidebar/Sidebar';
import { ReactNode } from 'react';
import ModalsProvider from '@/contexts/ModalsContext';
import ThemeProvider from '@/contexts/ThemeContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};

export default async function RootLayout({
	children,
}: {
	children: ReactNode;
}) {
	const session = await getServerSession(authOptions);

	return (
		<html lang="en">
			<Providers>
				<ThemeProvider>
					<ModalsProvider>
						<body className={inter.className}>
							<Toaster position="top-center" />
							<div className="fixed w-full top-0 z-20">
								<Navbar />
							</div>
							<main
								className={`flex pt-12 ${
									!session && 'pl-[270px]'
								} bg-secondary`}
							>
								{!session && (
									<div className="hidden xl:block fixed top-12 left-0">
										<Sidebar />
									</div>
								)}
								{children}
							</main>
							<div id="portal" />
						</body>
					</ModalsProvider>
				</ThemeProvider>
			</Providers>
		</html>
	);
}
