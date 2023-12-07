import { Input } from "./components/ui/input";
import { Button } from "./components/ui/button";
import { Checkbox } from "./components/ui/checkbox";
import { Table, TableBody, TableCell, TableHead, TableRow } from "./components/ui/table";
import { useState } from "react";
import { Edit2, Trash2 } from "lucide-react";

function App() {
	const [data, setData] = useState({
		full_name: "",
		email: "",
		phone: "",
		company: "",
		age: "",
	});

	const [isEditable, setIsEditable] = useState(false);

	const formSubmitHandler = (e) => {
		e.preventDefault();
	};
	return (
		<main>
			<div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-x">
				<div className="grid items-center px-6 py-10 lg:px-[10vw]">
					<form className="w-full flex flex-col" onSubmit={formSubmitHandler}>
						<Input type="text" placeholder="Full Name" name="" className="text-md h-12 px-4 mb-2" />
						<Input type="email" placeholder="Email" name="" className="text-md h-12 px-4 mb-2" />
						<Input type="text" placeholder="Phone" name="" className="text-md h-12 px-4 mb-2" />
						<Input type="text" placeholder="Company" name="" className="text-md h-12 px-4 mb-2" />
						<Input type="text" placeholder="Age" name="" className="text-md h-12 px-4 mb-4" />
						<div className="flex items-center space-x-2 mb-4">
							<Checkbox
								className="rounded-none"
								id="isEditable"
								checked={isEditable}
								onCheckedChange={() => setIsEditable(!isEditable)}
							/>
							<label
								htmlFor="isEditable"
								className="text-md leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
								Editable ?
							</label>
						</div>
						<Button className="text-md h-12 px-6 self-end">Submit</Button>
					</form>
				</div>
				<div className="grid items-center px-6 py-10 lg:px-[10vw]">
					<Table>
						<TableBody>
							<TableRow>
								<TableHead>Full Name</TableHead>
								<TableCell>{data.full_name}</TableCell>
								<TableCell className="text-right">
									{isEditable && (
										<Button variant="icon">
											<Edit2 className="h-4 w-4" />
										</Button>
									)}
									<Button variant="icon">
										<Trash2 className="h-4 w-4" />
									</Button>
								</TableCell>
							</TableRow>
							<TableRow>
								<TableHead>Email</TableHead>
								<TableCell>{data.email}</TableCell>
								<TableCell className="text-right">
									{isEditable && (
										<Button variant="icon">
											<Edit2 className="h-4 w-4" />
										</Button>
									)}
									<Button variant="icon">
										<Trash2 className="h-4 w-4" />
									</Button>
								</TableCell>
							</TableRow>
							<TableRow>
								<TableHead>Phone</TableHead>
								<TableCell>{data.phone}</TableCell>
								<TableCell className="text-right">
									{isEditable && (
										<Button variant="icon">
											<Edit2 className="h-4 w-4" />
										</Button>
									)}
									<Button variant="icon">
										<Trash2 className="h-4 w-4" />
									</Button>
								</TableCell>
							</TableRow>
							<TableRow>
								<TableHead>Company</TableHead>
								<TableCell>{data.company}</TableCell>
								<TableCell className="text-right">
									{isEditable && (
										<Button variant="icon">
											<Edit2 className="h-4 w-4" />
										</Button>
									)}
									<Button variant="icon">
										<Trash2 className="h-4 w-4" />
									</Button>
								</TableCell>
							</TableRow>
							<TableRow>
								<TableHead>Age</TableHead>
								<TableCell>{data.age}</TableCell>
								<TableCell className="text-right">
									{isEditable && (
										<Button variant="icon">
											<Edit2 className="h-4 w-4" />
										</Button>
									)}
									<Button variant="icon">
										<Trash2 className="h-4 w-4" />
									</Button>
								</TableCell>
							</TableRow>
						</TableBody>
					</Table>
				</div>
			</div>
		</main>
	);
}

export default App;
