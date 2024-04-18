export class FormatDateTime {
	private fecha: Date;

	constructor(fecha: Date) {
		this.fecha = fecha;
	}

	public formatDate(): string {
		const opcionesFecha: Intl.DateTimeFormatOptions = {
			day: '2-digit',
			month: '2-digit',
			year: 'numeric',
		};

		const opcionesHora: Intl.DateTimeFormatOptions = {
			hour: 'numeric',
			minute: 'numeric',
			second: 'numeric',
		};

		const fechaFormateada = this.fecha.toLocaleDateString(
			'es-ES',
			opcionesFecha
		);
		const horaFormateada = this.fecha.toLocaleTimeString('es-ES', opcionesHora);

		const datetime = `${fechaFormateada} ${horaFormateada}`;

		return datetime;
	}
}
