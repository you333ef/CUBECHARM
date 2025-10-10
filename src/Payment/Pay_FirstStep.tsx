import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AiOutlineCheck } from 'react-icons/ai';
import bank1 from '../assets/images/download.png';
import bank2 from '../assets/images/download (1).png';

interface PaymentProgressProps {
  currentStep: number;
}

const PaymentProgress = ({ currentStep }: PaymentProgressProps) => {
  const steps = [1, 2, 3];

  return (
    <div className="flex justify-center items-center mb-10 relative">
      {steps.map((step, index) => (
        <div key={step} className="flex items-center">
          {/* Step Circle */}
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center relative z-10 ${
              step <= currentStep
                ? 'bg-[#3b82f6] text-white'
                : 'bg-[#E5E5E5] text-[#898989]'
            }`}
          >
            {step < currentStep ? (
              <AiOutlineCheck className="w-5 h-5" />
            ) : (
              <span className="text-base font-medium">{step}</span>
            )}
          </div>

          {/* Line */}
          {index < steps.length - 1 && (
            <div className="w-20 h-0.5 bg-[#E5E5E5]" />
          )}
        </div>
      ))}
    </div>
  );
};

const Pay_FirstStep = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [room, setRoom] = useState<any>({});

  useEffect(() => {
    if (location?.state) {
      const roomData: any = location.state;
      const data = {
        startDate: roomData.createdAt,
        endDate: roomData.updatedAt,
        room: roomData._id,
        totalPrice: Math.round(
          roomData.price * roomData.capacity -
            (roomData.capacity * roomData.price * roomData.discount) / 100
        ),
      };
      setRoom(data);
    } else {
      // Mock data for testing
      setRoom({
        startDate: '2024-01-01',
        endDate: '2024-01-02',
        room: 'room123',
        totalPrice: 500,
      });
    }
  }, [location]);

  const handleContinue = () => {
    navigate('/PaymentContainer/Pay_SecondStep', { state: room });
  };

  const handleCancel = () => {
    if (location?.state) {
      navigate('/details', { state: location?.state });
    } else {
      navigate('/');
    }
  };

  if (!room || !room.totalPrice) return null;

  const tax = room.totalPrice * 0.1;
  const total = room.totalPrice + tax;

  return (
    <div className="min-h-screen bg-[#FAFBFC] px-5 py-10 md:px-10 md:py-16 flex flex-col items-center">
      <div className="max-w-3xl w-full bg-white rounded-2xl px-6 py-12 md:px-12 md:py-16 shadow-[0_10px_40px_rgba(0,0,0,0.05)]">
        {/* Progress Steps */}
        <PaymentProgress currentStep={2} />

        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-semibold text-[#000] mb-2">
            Payment
          </h1>
          <p className="text-lg text-[#000]">
            Kindly follow the instructions below
          </p>
        </div>

        {/* Content */}
        <div className="max-w-md mx-auto">
          <h2 className="text-xl font-semibold text-[#000] mb-6">
            Transfer Pembayaran:
          </h2>

          {/* Price Details */}
          <div className="mb-8 space-y-2">
            <div className="flex justify-between items-center text-[#000]">
              <span>Tax:</span>
              <span className="font-medium">10%</span>
            </div>
            <div className="flex justify-between items-center text-[#000]">
              <span>Sub total:</span>
              <span className="font-medium">${room.totalPrice} USD</span>
            </div>
            <div className="flex justify-between items-center text-[#000] pt-2 border-t border-[#E5E5E5]">
              <span className="font-semibold">Total:</span>
              <span className="font-semibold text-lg">
                ${total.toFixed(2)} USD
              </span>
            </div>
          </div>

          {/* Bank Details */}
          <div className="space-y-4 mb-10">
            {/* Bank Mandiri */}
            <div className="flex items-start gap-4 p-4 bg-[#F8F9FA] rounded-lg border border-[#E5E5E5] hover:shadow-md transition-shadow">
              <img
                src={bank1}
                alt="Bank Mandiri"
                className="w-16 h-10 object-contain"
              />
              <div>
                <div className="font-semibold text-[#000] mb-1">
                  Bank Mandiri
                </div>
                <div className="text-sm text-[#000]">2208 1996</div>
                <div className="text-sm text-[#000]">BuildWith Angga</div>
              </div>
            </div>

            {/* Bank Central Asia */}
            <div className="flex items-start gap-4 p-4 bg-[#F8F9FA] rounded-lg border border-[#E5E5E5] hover:shadow-md transition-shadow">
              <img
                src={bank2}
                alt="Bank Central Asia"
                className="w-16 h-10 object-contain"
              />
              <div>
                <div className="font-semibold text-[#152C5B] mb-1">
                  Bank Central Asia
                </div>
                <div className="text-sm text-[#7C8DB0]">2208 1996</div>
                <div className="text-sm text-[#7C8DB0]">BuildWith Angga</div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleContinue}
              className="w-full sm:w-48 bg-[#3b82f6] text-white py-3.5 px-7 rounded-lg font-medium shadow-[0_8px_15px_rgba(21,44,91,0.3)] hover:bg-[#152C5B]/90 hover:shadow-[0_12px_20px_rgba(21,44,91,0.4)] transition-all"
            >
              Continue to Pay
            </button>

            <button
              onClick={handleCancel}
              className="w-full sm:w-48 bg-white text-[#152C5B] py-3.5 px-7 rounded-lg font-medium border border-[#E5E5E5] shadow-[0_8px_15px_rgba(204,204,204,0.3)] hover:bg-[#F8F9FA] hover:shadow-[0_12px_20px_rgba(204,204,204,0.4)] transition-all"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pay_FirstStep;
