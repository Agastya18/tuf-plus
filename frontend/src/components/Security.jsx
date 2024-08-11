import { Lock } from "lucide-react";
import SettingSection from "./SettingSection";
import ToggleSwitch from "./ToggleSwitch";
import { useState } from "react";
import axios from 'axios'

const Security = () => {
	const [twoFactor, setTwoFactor] = useState(false);
	const [description, setDescription] = useState('');
	const [url, setUrl] = useState('');
    console.log(twoFactor)
	const submitHandler = async () => {
		try {
			const response = await axios.post('/api/banner', {
				bannerData: description,
				link: url
			});
			console.log(response.data);
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<SettingSection icon={Lock} title={"Banner-Setting"}>
			<ToggleSwitch
				label={"Banner on/off"}
				isOn={twoFactor}
				onToggle={() => setTwoFactor(!twoFactor)}
			/>


			<div className='mt-4 flex  justify-between'>
            <input
         value={description}
		 onChange={(e) => setDescription(e.target.value)}

  type="text"
  placeholder="Add description"
  className="input input-bordered input-primary rounded-md w-full max-w-xs" />
				<button
				onClick={submitHandler}
					className='bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded 
        transition duration-200
        '
				>
					add desc
				</button>
			</div>

            <div className='mt-4 flex  justify-between'>
            <input
					 value={url}
					 		 onChange={(e) => setUrl(e.target.value)}
  type="text"
  placeholder="Add Url"
  className="input input-bordered input-primary rounded-md w-full max-w-xs" />
				<button
				onClick={submitHandler}
					className='bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded 
        transition duration-200
        '
				>
					add Url
				</button>
			</div>
		</SettingSection>
	);
};
export default Security;