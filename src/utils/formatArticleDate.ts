export default (dateString: string) => {
	const [day, month, year] = dateString.split("/");

	const date = new Date(Number(year), Number(month) - 1, Number(day));

	const formattedDate = new Intl.DateTimeFormat("pt-BR", {
		day: "2-digit",
		month: "long",
		year: "numeric",
	}).format(date);

	return formattedDate;
};
