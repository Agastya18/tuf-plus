import { Lock } from "lucide-react";
import SettingSection from "./SettingSection";
import ToggleSwitch from "./ToggleSwitch";
import { useState } from "react";

const Security = () => {
	const [twoFactor, setTwoFactor] = useState(false);
    console.log(twoFactor)

	return (
		<SettingSection icon={Lock} title={"Banner-Setting"}>
			<ToggleSwitch
				label={"Banner on/off"}
				isOn={twoFactor}
				onToggle={() => setTwoFactor(!twoFactor)}
			/>


			<div className='mt-4 flex  justify-between'>
            <input
  type="text"
  placeholder="Add description"
  className="input input-bordered input-primary rounded-md w-full max-w-xs" />
				<button
					className='bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded 
        transition duration-200
        '
				>
					add desc
				</button>
			</div>
		</SettingSection>
	);
};
export default Security;