import { ArrowLeft, Lock, Gift, CheckCircle, X } from 'lucide-react';
import { useNavigate } from 'react-router';
import { useEffect, useState } from 'react';

export default function OfferPage() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (showModal) {
      // Set up OGads callback for when user completes an offer
      (window as any).OG_callback = function() {
        // Redirect to the download page after successful completion
        window.location.href = 'https://buzzheavier.com/cc0jv1it89h9';
      };

      // Load OGads content locker script when modal opens
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.id = 'ogjs';
      script.src = 'https://checkmyapp.store/cl/js/5nlrvw';
      script.async = true;

      const container = document.getElementById('ogads-container');
      if (container) {
        container.appendChild(script);
      }

      // Cleanup function to remove script when modal closes
      return () => {
        const scriptElement = document.getElementById('ogjs');
        if (scriptElement && scriptElement.parentNode) {
          scriptElement.parentNode.removeChild(scriptElement);
        }
        // Clean up the callback
        delete (window as any).OG_callback;
      };
    }
  }, [showModal]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-gray-300 hover:text-white mb-8 transition"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Games
        </button>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-600 rounded-full mb-4">
              <Lock className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">Unlock Tomodachi Life</h1>
            <p className="text-gray-300">Complete one offer below to access the game</p>
          </div>

          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
              <div>
                <p className="text-white font-semibold">Step 1: Choose an offer</p>
                <p className="text-gray-400 text-sm">Select any offer from the list below</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
              <div>
                <p className="text-white font-semibold">Step 2: Complete the offer</p>
                <p className="text-gray-400 text-sm">Follow the instructions to complete your selected offer</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Gift className="w-5 h-5 text-purple-400 flex-shrink-0 mt-1" />
              <div>
                <p className="text-white font-semibold">Step 3: Get instant access</p>
                <p className="text-gray-400 text-sm">After completion, you'll be redirected to download the game</p>
              </div>
            </div>
          </div>

          <div className="bg-black/30 rounded-xl p-6 border border-white/10 text-center">
            <h2 className="text-xl font-bold text-white mb-4">Ready to Play?</h2>
            <p className="text-gray-300 mb-6">Click the button below to verify and unlock Tomodachi Life</p>

            <button
              onClick={() => setShowModal(true)}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-12 py-4 rounded-lg font-bold text-lg transition shadow-lg hover:shadow-xl"
            >
              Verify Now
            </button>
          </div>
        </div>
      </div>

      {/* Modal for OGads Content Locker */}
      {showModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-gradient-to-br from-slate-900 to-purple-900 rounded-2xl border border-white/20 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-black/30 backdrop-blur-md border-b border-white/10 p-4 flex items-center justify-between">
              <h3 className="text-xl font-bold text-white">Complete Verification</h3>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-400 hover:text-white transition"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6">
              <div className="mb-6 text-center">
                <p className="text-gray-300">Complete one of the offers below to unlock your game</p>
              </div>

              {/* OGads Content Locker */}
              <div id="ogads-container" className="bg-white/5 rounded-lg p-4 min-h-[400px]">
                {/* OGads script will be loaded here */}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
