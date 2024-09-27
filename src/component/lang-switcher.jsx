import React from "react";
import { Dropdown } from "react-bootstrap";
import { langs, setCurrentLang } from "../helpers/locale-helper";
import { useSelector } from "react-redux";

export const LangSwitcher = () => {
	const currentLang = useSelector((state) => state.locale.lang);

	return (
		<Dropdown>
			<Dropdown.Toggle variant="danger" id="dropdown-basic">
				<span className={`fi fi-${currentLang.countryCode} me-2`}></span>
				{currentLang.name}
			</Dropdown.Toggle>

			<Dropdown.Menu>
				{langs.map((item) => (
					<Dropdown.Item key={item.code} onClick={() => setCurrentLang(item)}>
						<span className={`fi fi-${item.countryCode} me-2`}></span>
						{item.name}
					</Dropdown.Item>
				))}
			</Dropdown.Menu>
		</Dropdown>
	);
};
