import type { User } from "./types";

export const apiResponse: unknown = [
	{ name: "Tony", age: 23 },
	{ name: "Kevin", age: 24 },
	{ name: "Jim", age: 25 },
];

export function getUsersData(): User[] {
	if (!Array.isArray(apiResponse)) {
		return [];
	}

	return apiResponse.map((u) => {
		if (typeof u !== "object" || u === null)
			return {
				name: "",
				age: 0,
			};

		const name = "name" in u && typeof u.name === "string" ? u.name : "";
		const rawAge = "age" in u ? u.age : 0;
		const age = typeof rawAge === "number" ? rawAge : Number(rawAge) || 0;

		return { name, age };
	});
}

export function formatAges(users: User[]): string[] {
	return users.map((u) => u.age.toFixed(0));
}
