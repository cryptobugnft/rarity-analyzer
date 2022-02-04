import * as React from "react";
import Image from "next/image";
import { OpenSeaIcon } from "../Icons";

const MarketPlaceLinks = ({ id}: { id: string }) => {
	id = id + 1;
	return (
		<div className="flex items-center justify-star space-x-1 mt-3 mb-5">
			{process.env.NEXT_PUBLIC_COLLECTION_TOKEN && (
				<>

					<a
						className="text-gray-600 dark:text-gray-300 flex flex-row items-center rounded-md hover:bg-gray-100  dark:hover:bg-gray-700 border-gray-300 bg-white dark:bg-gray-800 dark:border-gray-600 px-3 py-1.5 border transition-colors text-xs xs:text-base ease-in-out opacity-90 shadow-sm"
						href={`https://oasis.cash/token/${process.env.NEXT_PUBLIC_COLLECTION_TOKEN}/${id}`}
						target="_blank" 
						rel="noopener noreferrer nofollow"
					>
						<div className="flex items-center">
							<span className="mr-2">
								<Image src="/oasis_logo.svg" width="20px" height="20px" />
							</span>
							Oasis
						</div>
					</a>

					<a
						className="text-gray-600 dark:text-gray-300 flex flex-row items-center rounded-md hover:bg-gray-100  dark:hover:bg-gray-700 border-gray-300 bg-white dark:bg-gray-800 dark:border-gray-600 px-3 py-1.5 border transition-colors text-xs xs:text-base ease-in-out opacity-90 shadow-sm"
						href={`https://www.smartscan.cash/address/${process.env.NEXT_PUBLIC_COLLECTION_TOKEN}?a=${id}`}
						target="_blank"
						rel="noopener noreferrer nofollow"
					>
						<div className="flex items-center">
							<span className="mr-2">
								<Image
									src="/SMARTBCH.png"
									width="20px"
									height="20px"
								/>
							</span>
							Smartscan
						</div>
					</a>
				</>
			)}
		</div>
	);
};

export default MarketPlaceLinks;
