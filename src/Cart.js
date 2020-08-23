import React from "react";
import SummaryItem from "./SummaryItem";
import Total from "./Total";


export default function Cart(props) {
	return (
		<section className="main__summary">
			<h2>Your cart</h2>
			{Object.keys(props.selected).map((feature, idx) => {
				const featureHash = feature + "-" + idx;
				const selectedOption = props.selected[feature];
				return (
					<SummaryItem
						key={featureHash}
						name={feature}
						cost={selectedOption.cost}
						option={selectedOption.name}
					/>
				);
			})}
			<Total total={props.total} selected={props.selected} />
		</section>
	);
}
