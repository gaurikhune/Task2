import React , { Fragment }from 'react'
import { format } from 'date-fns'
import { Link } from 'react-router-dom'
import { getOrderStatus } from '../lib/helpers'
import { Menu, Popover, Transition } from '@headlessui/react'
import { HiOutlineBell, HiOutlineSearch, HiOutlineChatAlt } from 'react-icons/hi'


const recentOrderData = [
	
	{
		id: '4342',
		product_name: 'Abstract 3D',
		
		product_thumbnail: 'https://source.unsplash.com/100x100?earphone',
		product_price: '$45.99',
		product_stock: '32 in stock',
		sales:20
	},
	{
		id: '3432',
		product_name: 'Sarphens lllustraction"',
		product_thumbnail: 'https://source.unsplash.com/100x100?macbook',
		product_price: '$45.99',
		product_stock: '32 in stock',
		sales:20
	},
	{
		id: '7633',
		product_name: 'Samsung Galaxy Buds 2',
		product_thumbnail: 'https://source.unsplash.com/100x100?earbuds',
		product_price: '$399.00',
		product_stock: '32 in stock',
		sales:20
	},
	{
		id: '6534',
		product_name: 'Asus Zenbook Pro',
		product_thumbnail: 'https://source.unsplash.com/100x100?laptop',
		product_price: '$899.00',
		product_stock: '32 in stock',
		sales:20
	},
	{
		id: '9234',
		product_name: 'LG Flex Canvas',
		product_thumbnail: 'https://source.unsplash.com/100x100?smartphone',
		product_price: '$499.00',
		product_stock: '32 in stock',
		sales:20
	},
	{
		id: '4314',
		product_name: 'Apple Magic Touchpad',
		product_thumbnail: 'https://source.unsplash.com/100x100?touchpad',
		product_price: '$699.00',
		product_stock: '32 in stock',
		sales:20
	},
]

export default function RecentOrders() {
	return (
		<div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
			<strong className="text-gray-700 font-medium">Product Sell</strong>
			
			<div className="relative" style={{'margin-left': '55%',
 ' margin-top': '-2%'}}>
			<span>
				<HiOutlineSearch fontSize={20} className="text-gray-400 absolute top-1/2 left-3 -translate-y-1/2" />
				<input
					type="text"
					placeholder="Search..."
					className="text-sm focus:outline-none active:outline-none border border-gray-300 w-[16rem] h-10 pl-11 pr-4 rounded-sm"
				/>
			</span>
			</div>
			<div className="pl-4" style={{'margin-top': '-3%',
 ' margin-left': '77%'}}>
					<span className="text-sm text-gray-500 font-light" style={{'margin-left':' 77%'}}>
					<input
					type="text"
					placeholder="Last 30 days"
					className="text-sm focus:outline-none active:outline-none border border-gray-300 w-[15rem] h-10 pl-11 pr-4 rounded-sm"
				/>
					</span>
				
					</div>
		
	<div className="border-x border-gray-200 rounded-sm mt-3">
				<table className="w-full text-gray-700">
					<thead>
						<tr>
							
							<th>Product Name</th>
							<th> </th>
							<th>Stock</th>
							<th>Price</th>
							<th>Total Sales</th>
							
						</tr>
					</thead>
					<tbody>
						{recentOrderData.map((order) => (
							<tr key={order.id}>
								<td>
									<img style={{'width':'45%'}}
								className="w-full h-full object-cover rounded-sm"
								src={order.product_thumbnail}
								alt={order.product_name}
								
							/>
							
								</td>
								
								<td>
									<Link to={`/customer/${order.product_name}`}>{order.product_name}</Link>
								</td>
								{/* <td>{format(new Date(order.order_date), 'dd MMM yyyy')}</td> */}
								<td>{order.product_price}</td>
								<td>{order.product_stock}</td>
								<td>{order.sales}</td>
								{/* <td>{getOrderStatus(order.current_order_status)}</td> */}
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	)
}
