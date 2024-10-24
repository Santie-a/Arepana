import React from 'react';
import './MembershipPlans.css';

const Memberships = () => {
    return (
        <div className="memberships-container">
            <h2>Planes de Membresia</h2>
            <div className="plans">
                {/* Plan 1 */}
                <div className="plan">
                    <h3>Plan Gratis</h3>
                    <ul>
                        <li>Contiene anuncios.</li>
                        <li>2 Reservas por mes.</li>
                    </ul>
                </div>

                {/* Plan 2 */}
                <div className="plan">
                    <h3>Plan Básico</h3>
                    <ul>
                        <li>4 Reservas semanales.</li>
                        <li>Sin anuncios.</li>
                        <li>Acceso a áreas comunes.</li>
                        <li>Descuentos en productos seleccionados.</li>
                    </ul>
                    <button className="purchase-button">30.000$ COP / Mes</button>
                </div>

                {/* Plan 3 */}
                <div className="plan">
                    <h3>Premium Plan</h3>
                    <ul>
                        <li>Todas las ventajas del plan básico.</li>
                        <li>Reservas ilimitadas.</li>
                        <li>Cashback.</li>
                        <li>Acceso a cubiculos premium.</li>
						<li>Prioridad en eventos de networking y charlas exclusivas.</li>
						<li>15 % de descuento en los productos de cafeterias aliadas</li>
                    </ul>
                    <button className="purchase-button">50.000$ COP / Mes</button>
                </div>
            </div>
        </div>
    );
};

export default Memberships;
