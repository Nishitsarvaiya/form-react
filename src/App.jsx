import { Toaster } from './components/ui/toaster';
import { useState } from 'react';
import * as yup from 'yup';
import { useToast } from './components/ui/use-toast';
import Form from './components/Form';
import DataTable from './components/DataTable';

const SCHEMA = yup.object().shape({
	first_name: yup.string().min(3, 'First Name must consist of atleast 3 characters').required(),
	last_name: yup.string().min(2, 'Last Name must consist of atleast 2 characters').required(),
	email: yup.string().email('Email is invalid').required(),
	phone: yup.number().required(),
	company: yup.string().min(3, 'Company must consist of atleast 3 characters').required(),
});

function App() {
	const { toast } = useToast();
	const [data, setData] = useState({
		first_name: '',
		last_name: '',
		email: '',
		phone: '',
		company: '',
	});

	const [tableData, setTableData] = useState({
		first_name: '',
		last_name: '',
		email: '',
		phone: '',
		company: '',
	});

	const [isEditable, setIsEditable] = useState(false);

	const inputChangeHandler = (e) => {
		setData({ ...data, [e.target.name]: e.target.value });
	};

	const formSubmitHandler = (e) => {
		e.preventDefault();
		validateForm();
	};

	const deleteRow = (row) => {
		setTableData({ ...tableData, [row]: '' });
	};

	const validateForm = async () => {
		await SCHEMA.validate(data)
			.then((res) => {
				setTableData({ ...res });
			})
			.catch((err) => {
				toast({
					title: err.message,
					variant: 'destructive',
				});
			});
	};

	return (
		<main>
			<div className='min-h-screen grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-x'>
				<div className='grid items-center px-6 py-10 lg:px-[10vw]'>
					<Form
						inputChangeHandler={inputChangeHandler}
						formSubmitHandler={formSubmitHandler}
						isEditable={isEditable}
						setIsEditable={setIsEditable}
					/>
				</div>
				<div className='grid items-center px-6 py-10 lg:px-[10vw]'>
					<DataTable tableData={tableData} isEditable={isEditable} deleteRow={deleteRow} />
				</div>
			</div>
			<Toaster />
		</main>
	);
}

export default App;
