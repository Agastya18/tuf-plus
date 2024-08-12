import { Lock } from "lucide-react";
import SettingSection from "./SettingSection";
import ToggleSwitch from "./ToggleSwitch";
import { useState,useEffect } from "react";
import axios from 'axios'


const Security = () => {
	const [twoFactor, setTwoFactor] = useState(false );
	const [description, setDescription] = useState('');
	const [time,setTime] = useState(0)
	const [url, setUrl] = useState('');
   // console.log(twoFactor)
   useEffect(() => {
	// Fetch the current `isVisible` status from the backend
	const fetchBannerStatus = async () => {
		try {
			const { data } = await axios.get('/api/get');
			console.log(data);

			if (data && typeof data.isVisible === 'boolean') {
				setTwoFactor(data.isVisible);
			}
		} catch (error) {
			console.error('Failed to fetch banner status:', error);
		}
	};

	fetchBannerStatus();
}, []);
	const submitHandler = async () => {
		try {
			const response = await axios.post('/api/banner', {
				bannerData: description,
				link: url,
				timer: time
			});
			console.log(response.data);
		} catch (error) {
			console.log(error);
			
		}
	}
	const handleToggle = async() => {
		 let newtwoFactor = !twoFactor;
		 const f=-1;
        setTwoFactor(newtwoFactor);
		console.log("two factor",newtwoFactor)

		try {

			const response = await axios.post('/api/toggle', {
				isVisible: newtwoFactor,
				timer: f
			});
		//	console.log(response);
			
		} catch (error) {
			console.log(error);
			setTwoFactor(!newtwoFactor);

			
		}
	};

	return (
		<SettingSection icon={Lock} title={"Banner-Setting"}>
			<ToggleSwitch
				label={"Banner on/off"}
				isOn={twoFactor}
				onToggle={handleToggle}
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

			<div className='mt-4 flex  justify-between'>
            <input
					 value={time}
					 		 onChange={(e) => setTime(e.target.value)}
  type="number"
  placeholder="Add Timer"
  className="input input-bordered input-primary rounded-md w-full max-w-xs" />
				<button
				onClick={submitHandler}
					className='bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded 
        transition duration-200
        '
				>
					add Timer
				</button>
			</div>
		</SettingSection>
	);
};
export default Security;