import React, { useState } from 'react';
import { X } from 'lucide-react';

const TipModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
	const [selectedAmount, setSelectedAmount] = useState<number>(5);
	const [frequency, setFrequency] = useState<string>('One-off');
	const [showCustom, setShowCustom] = useState<boolean>(false);
	const [customAmount, setCustomAmount] = useState<string>('');

	return (
		<div
			className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-end justify-center md:items-center"
			onClick={onClose}
			role="dialog"
			aria-modal="true"
		>
			<div
				className="bg-white w-full max-w-sm md:rounded-2xl rounded-t-2xl shadow-lg md:mx-4"
				onClick={(e) => e.stopPropagation()}
			>
				<div className="relative p-6 md:p-6 max-h-[85vh] overflow-y-auto no-scrollbar">
					<button
						className="absolute top-3 right-3 p-2 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300"
						onClick={onClose}
						aria-label="Close"
					>
						<X className="w-6 h-6" />
					</button>
					<div className="flex flex-col items-center text-center">
						<img src="https://placehold.co/80x80" alt="Profile" className="rounded-full mb-3" />
						<h2 className="font-bold text-xl mb-4">Send a tip to Hey Pippa</h2>
						<div className="grid grid-cols-4 gap-2 w-full mb-4">
							{[1,2,5,10].map((amount) => (
								<button
									key={amount}
									className={`rounded-full px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-gray-300 ${selectedAmount === amount ? 'bg-cyan-800 text-white border border-transparent hover:bg-blue-800' : 'border text-blue-700 hover:bg-gray-50'} ${showCustom ? 'opacity-50 cursor-not-allowed hover:bg-transparent' : ''}`}
									disabled={showCustom}
									onClick={() => { if (showCustom) return; setSelectedAmount(amount); }}
									aria-pressed={selectedAmount === amount}
								>
									${amount}
								</button>
							))}
						<button
							className={`rounded-full px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-gray-300 ${showCustom ? 'bg-cyan-800 text-white border border-transparent hover:bg-blue-800' : 'border text-blue-700 hover:bg-gray-50'}`}
							onClick={() => setShowCustom((prev) => !prev)}
							aria-pressed={showCustom}
						>
							C
						</button>
						</div>
					{showCustom && (
						<div className="w-full mb-4">
							<label htmlFor="custom-amount" className="sr-only">Custom amount</label>
							<div className="flex items-center gap-2">
								<span className="text-gray-600">$</span>
								<input
									id="custom-amount"
									type="number"
									inputMode="numeric"
									min={1}
									className="w-full rounded-lg border p-2 focus:outline-none focus:ring-2 focus:ring-gray-300"
									placeholder="Enter custom amount"
									value={customAmount}
									onChange={(e) => {
										setCustomAmount(e.target.value);
										const parsed = parseInt(e.target.value, 10);
										if (!isNaN(parsed) && parsed > 0) {
											setSelectedAmount(parsed);
										}
									}}
								/>
							</div>
						</div>
					)}
						<textarea className="w-full rounded-lg border p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-gray-300" rows={3} placeholder="Say something nice" />
						<div className="w-full mb-5">
							<label htmlFor="tip-frequency" className="block text-sm font-medium mb-1">Frequency</label>
							<select
								id="tip-frequency"
								className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gray-300 bg-white"
								value={frequency}
								onChange={(e) => setFrequency(e.target.value)}
							>
								<option>One-off</option>
								<option>Monthly</option>
								<option>Quarterly</option>
								<option>Annually</option>
							</select>
						</div>
						<button className="bg-cyan-800 text-white w-full py-3 rounded-full font-semibold">
							{`Tip $${selectedAmount}`}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TipModal;
