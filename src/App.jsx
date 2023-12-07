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

	const [tableData, setTableData] = useState({
		full_name: "",
		email: "",
		phone: "",
		company: "",
		age: "",
	});

	const [isEditable, setIsEditable] = useState(false);

	const inputChangeHandler = (e) => {
		setData({ ...data, [e.target.name]: e.target.value });
	};

	const formSubmitHandler = (e) => {
		e.preventDefault();
		setTableData({ ...data });
	};

	return (
		<main>
			<div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-x">
				<div className="grid items-center px-6 py-10 lg:px-[10vw]">
					<form className="w-full flex flex-col" onSubmit={formSubmitHandler}>
						<Input
							type="text"
							placeholder="Full Name"
							name="full_name"
							id="full_name"
							className="text-md h-12 px-4 mb-2"
							onChange={inputChangeHandler}
						/>
						<Input
							type="email"
							placeholder="Email"
							name="email"
							id="email"
							className="text-md h-12 px-4 mb-2"
							onChange={inputChangeHandler}
						/>
						<Input
							type="text"
							placeholder="Phone"
							name="phone"
							id="phone"
							className="text-md h-12 px-4 mb-2"
							onChange={inputChangeHandler}
						/>
						<Input
							type="text"
							placeholder="Company"
							name="company"
							id="company"
							className="text-md h-12 px-4 mb-2"
							onChange={inputChangeHandler}
						/>
						<Input
							type="text"
							placeholder="Age"
							name="age"
							id="age"
							className="text-md h-12 px-4 mb-4"
							onChange={inputChangeHandler}
						/>
						<div className="flex justify-between items-start mb-4">
							<div className="flex items-center space-x-2">
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
							<Button className="text-md h-12 px-6 self-end" type="submit">
								Submit
							</Button>
						</div>
					</form>
				</div>
				<div className="grid items-center px-6 py-10 lg:px-[10vw]">
					<Table>
						<TableBody>
							<TableRow>
								<TableHead>Full Name</TableHead>
								<TableCell>{tableData.full_name}</TableCell>
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
								<TableCell>{tableData.email}</TableCell>
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
								<TableCell>{tableData.phone}</TableCell>
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
								<TableCell>{tableData.company}</TableCell>
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
								<TableCell>{tableData.age}</TableCell>
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
