import { Edit2, Trash2 } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableRow } from './ui/table';
import { Button } from './ui/button';

export default function DataTable({ tableData, deleteRow, isEditable }) {
	return (
		<Table>
			<TableBody>
				<TableRow>
					<TableHead>First Name</TableHead>
					<TableCell>{tableData.first_name}</TableCell>
					<TableCell className='text-right'>
						{isEditable && (
							<Button variant='icon'>
								<Edit2 className='h-4 w-4' />
							</Button>
						)}
						<Button variant='icon' onClick={() => deleteRow('first_name')}>
							<Trash2 className='h-4 w-4' />
						</Button>
					</TableCell>
				</TableRow>
				<TableRow>
					<TableHead>Last Name</TableHead>
					<TableCell>{tableData.last_name}</TableCell>
					<TableCell className='text-right'>
						{isEditable && (
							<Button variant='icon'>
								<Edit2 className='h-4 w-4' />
							</Button>
						)}
						<Button variant='icon' onClick={() => deleteRow('last_name')}>
							<Trash2 className='h-4 w-4' />
						</Button>
					</TableCell>
				</TableRow>
				<TableRow>
					<TableHead>Email</TableHead>
					<TableCell>{tableData.email}</TableCell>
					<TableCell className='text-right'>
						{isEditable && (
							<Button variant='icon'>
								<Edit2 className='h-4 w-4' />
							</Button>
						)}
						<Button variant='icon' onClick={() => deleteRow('email')}>
							<Trash2 className='h-4 w-4' />
						</Button>
					</TableCell>
				</TableRow>
				<TableRow>
					<TableHead>Phone</TableHead>
					<TableCell>{tableData.phone}</TableCell>
					<TableCell className='text-right'>
						{isEditable && (
							<Button variant='icon'>
								<Edit2 className='h-4 w-4' />
							</Button>
						)}
						<Button variant='icon' onClick={() => deleteRow('phone')}>
							<Trash2 className='h-4 w-4' />
						</Button>
					</TableCell>
				</TableRow>
				<TableRow>
					<TableHead>Company</TableHead>
					<TableCell>{tableData.company}</TableCell>
					<TableCell className='text-right'>
						{isEditable && (
							<Button variant='icon'>
								<Edit2 className='h-4 w-4' />
							</Button>
						)}
						<Button variant='icon' onClick={() => deleteRow('company')}>
							<Trash2 className='h-4 w-4' />
						</Button>
					</TableCell>
				</TableRow>
			</TableBody>
		</Table>
	);
}
