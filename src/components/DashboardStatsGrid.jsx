import React from 'react'
import { IoBagHandle, IoPieChart, IoPeople, IoCart} from 'react-icons/io5'
import {FaDollarSign}from 'react-icons/fa6'
import{IoIosPaper,IoIosWallet} from 'react-icons/io'
import{IoArrowUpOutline} from 'react-icons/io5'

export default function DashboardStatsGrid() {
	return (
		<div className="flex gap-4">
				<BoxWrapper>
				<div className="rounded-full h-12 w-12 flex items-center justify-center bg-orange-600">
					<FaDollarSign className="text-2xl text-white" />
				</div>
				<div className="pl-4">
					<span className="text-sm text-gray-500 font-light">Earning</span>
					<div className="flex items-center">
						<strong className="text-xl text-gray-700 font-semibold">$3198k</strong>
						
					</div>
					<div className="flex items-center">
					<span className="text-green-500">37.8%</span><span> this month</span>
					</div>
				</div>
			</BoxWrapper>
			<BoxWrapper>
				<div className="rounded-full h-12 w-12 flex items-center justify-center bg-yellow-400">
					<IoIosPaper className="text-2xl text-white" />
				</div>
				<div className="pl-4">
					<span className="text-sm text-gray-500 font-light">Orders</span>
					<div className="flex items-center">
						<strong className="text-xl text-gray-700 font-semibold">$2.4k</strong>
						
					</div>
					<div className="flex items-center">
						<span className="text-green-500">2%</span><span>this month</span>
						
					</div>
				</div>
			</BoxWrapper>
			<BoxWrapper>
				<div className="rounded-full h-12 w-12 flex items-center justify-center bg-green-600">
					<IoIosWallet className="text-2xl text-white" />
				</div>
				<div className="pl-4">
					<span className="text-sm text-gray-500 font-light">Balance</span>
					<div className="flex items-center">
						<strong className="text-xl text-gray-700 font-semibold">
							$2.4k</strong>
						
					</div>
					<div className="flex items-center">
						<span className="text-green-500">2%</span><span>this month</span>
						
					</div>
				</div>
			</BoxWrapper>
			<BoxWrapper>
				<div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-500">
					<IoBagHandle className="text-2xl text-white" />
				</div>
				<div className="pl-4">
					<span className="text-sm text-gray-500 font-light">Total Sales</span>
					<div className="flex items-center">
						<strong className="text-xl text-gray-700 font-semibold">$89k</strong>
						{/* <span className="text-sm text-green-500 pl-2">+343</span> */}
					</div>
					<div className="flex items-center">
						<span className="text-green-500">11%</span><span>this week</span>
						{/* <span className="text-sm text-green-500 pl-2">+343</span> */}
					</div>
				</div>
			</BoxWrapper>
		
			
		
		</div>
	)
}

function BoxWrapper({ children }) {
	return <div className="bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center">{children}</div>
}
