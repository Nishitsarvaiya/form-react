import { Input } from './ui/input';
import { Button } from './ui/button';
import { Checkbox } from './ui/checkbox';

export default function Form({ inputChangeHandler, formSubmitHandler, isEditable, setIsEditable }) {
	return (
		<form className='w-full flex flex-col' onSubmit={formSubmitHandler}>
			<Input
				type='text'
				placeholder='First Name'
				name='first_name'
				id='first_name'
				className='text-md h-12 px-4 mb-2'
				onChange={inputChangeHandler}
				required
			/>
			<Input
				type='text'
				placeholder='Last Name'
				name='last_name'
				id='last_name'
				className='text-md h-12 px-4 mb-2'
				onChange={inputChangeHandler}
				required
			/>
			<Input
				type='email'
				placeholder='Email'
				name='email'
				id='email'
				className='text-md h-12 px-4 mb-2'
				onChange={inputChangeHandler}
				required
			/>
			<Input
				type='text'
				placeholder='Phone'
				name='phone'
				id='phone'
				className='text-md h-12 px-4 mb-2'
				onChange={inputChangeHandler}
				required
			/>
			<Input
				type='text'
				placeholder='Company'
				name='company'
				id='company'
				className='text-md h-12 px-4 mb-2'
				onChange={inputChangeHandler}
				required
			/>
			<div className='flex justify-between items-start mb-4'>
				<div className='flex items-center space-x-2'>
					<Checkbox
						className='rounded-none'
						id='isEditable'
						checked={isEditable}
						onCheckedChange={() => setIsEditable(!isEditable)}
					/>
					<label
						htmlFor='isEditable'
						className='text-md leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
					>
						Editable ?
					</label>
				</div>
				<Button className='text-md h-12 px-6 self-end' type='submit'>
					Submit
				</Button>
			</div>
		</form>
	);
}
