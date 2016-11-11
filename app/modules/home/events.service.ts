import { Injectable } from '@angular/core';

@Injectable()

/**
 * Responsible to get information related to events from data base.
 */
export class EventService
{
    /**
     * Return all events registered
     *
     * @returns {Promise<{title: string, place: string, urlImage: string, description: string}[]>}
     */
    public getEvents(): Promise<any[]>
    {
        return Promise.resolve(this.buildMockEvents());
    }

    /**
     * Build data mock for events
     */
    private buildMockEvents()
    {
        return [
            {
                title: 'XIV Feria del pato el Cuy y la chica Tolateña',
                urlOrigin: 'www.facebook.com',
                place: 'Plaza Principal Turistica de Tolata km 33 Carretera antigua a Santa Cruz',
                image: 'app/modules/assets/images/events/tolata-4-04-2014.jpg',
                date: '6 de Julio 2014',
                description: 'Tolata Capital Turística del Valle Alto, Te invita a la XIV Feria del Pato, Cuy y el Nectar Tolateño. Domindo 6 de julio desde las 9:00am en la Plaza Principal Turística de Tolata , carretera antigua a Santa Cruz Km. 33 Se servirán variedad de platas como ser: - Lambreado de conejo - Chanka de conejo - Pato al vino - Pato asado- Pampaku'
            },
            
        ];
    }
}