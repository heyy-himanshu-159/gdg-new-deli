import React, { useState } from 'react';
import { PROFILE_AVATAR_URL } from '../data/atelierData';

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProfileModal: React.FC<ProfileModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'dossier' | 'measurements' | 'orders'>('dossier');
  const [conciergeSent, setConciergeSent] = useState(false);

  // Editable measurements
  const [measurements, setMeasurements] = useState({
    chest: '98 cm',
    shoulder: '44 cm',
    sleeve: '63 cm',
    waist: '82 cm',
    inseam: '81 cm',
  });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-[#1a1c1a]/60 backdrop-blur-sm transition-opacity"
      />

      {/* Surface */}
      <div className="relative w-full max-w-lg bg-[#faf9f6] rounded-2xl shadow-2xl border border-[#1a1c1a]/10 overflow-hidden z-10 flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="p-5 border-b border-[#1a1c1a]/10 flex items-center justify-between bg-white">
          <div className="flex items-center gap-3">
            <img
              src={PROFILE_AVATAR_URL}
              alt="Client Profile"
              className="w-11 h-11 rounded-full object-cover ring-2 ring-[#8c4e36]/30"
            />
            <div>
              <span className="font-sans text-[10px] uppercase tracking-widest text-[#8c4e36] font-semibold block">
                Maison Atelier Circle
              </span>
              <h3 className="font-serif text-lg text-[#1a1c1a] font-normal leading-tight">
                Himanshu Keshari
              </h3>
              <p className="font-sans text-[11px] text-[#747878]">
                Patron Member · No. ATL-VIP-0842
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full hover:bg-[#efeeeb] flex items-center justify-center text-[#747878] hover:text-[#1a1c1a]"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        {/* Tab Strip */}
        <div className="flex border-b border-[#1a1c1a]/10 bg-[#f4f3f0] px-4 font-sans text-xs">
          <button
            onClick={() => setActiveTab('dossier')}
            className={`py-3 px-3 border-b-2 font-medium transition-colors ${
              activeTab === 'dossier'
                ? 'border-[#1a1c1a] text-[#1a1c1a]'
                : 'border-transparent text-[#747878] hover:text-[#1a1c1a]'
            }`}
          >
            Dossier &amp; Privileges
          </button>
          <button
            onClick={() => setActiveTab('measurements')}
            className={`py-3 px-3 border-b-2 font-medium transition-colors ${
              activeTab === 'measurements'
                ? 'border-[#1a1c1a] text-[#1a1c1a]'
                : 'border-transparent text-[#747878] hover:text-[#1a1c1a]'
            }`}
          >
            Sartorial Fit Profile
          </button>
          <button
            onClick={() => setActiveTab('orders')}
            className={`py-3 px-3 border-b-2 font-medium transition-colors ${
              activeTab === 'orders'
                ? 'border-[#1a1c1a] text-[#1a1c1a]'
                : 'border-transparent text-[#747878] hover:text-[#1a1c1a]'
            }`}
          >
            Allocations
          </button>
        </div>

        {/* Content Area */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-4 font-sans text-xs flex-1">
          {activeTab === 'dossier' && (
            <div className="space-y-4">
              <div className="p-4 bg-white rounded-xl border border-[#1a1c1a]/5 space-y-2">
                <span className="font-sans text-[10px] uppercase tracking-wider text-[#8c4e36] font-semibold">
                  Tier Privileges
                </span>
                <h4 className="font-serif text-base text-[#1a1c1a]">
                  Archival Capsule Advance Access
                </h4>
                <p className="text-xs text-[#747878] leading-relaxed">
                  As a Circle Member, your account enjoys private 48-hour pre-allocation on numbered editions before international public drops.
                </p>
              </div>

              {/* Concierge booking */}
              <div className="p-4 bg-[#f4f3f0] rounded-xl border border-[#1a1c1a]/5 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#8c4e36] text-[20px]">
                    support_agent
                  </span>
                  <span className="font-serif text-sm text-[#1a1c1a]">
                    Private Atelier Concierge
                  </span>
                </div>
                <p className="text-[#444748] text-xs leading-relaxed">
                  Direct line to our Paris salon for bespoke fitting consultations, custom garment hems, or fabric provenance archives.
                </p>

                {conciergeSent ? (
                  <div className="p-2.5 bg-[#feae90] text-[#6f3721] rounded-lg text-xs font-medium">
                    Concierge alert logged. Geneviève’s team will contact himanshukeshari935@gmail.com shortly.
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={() => setConciergeSent(true)}
                    className="px-4 py-2 bg-[#1a1c1a] text-white rounded-full hover:bg-[#8c4e36] font-sans text-[11px] uppercase tracking-wider font-semibold transition-colors"
                  >
                    Request Salon Appointment
                  </button>
                )}
              </div>
            </div>
          )}

          {activeTab === 'measurements' && (
            <div className="space-y-4">
              <div className="p-3 bg-[#f4f3f0] rounded-lg text-[#747878] text-[11px]">
                Your biometric tailoring profile helps our cutters suggest exact draping adjustments for coats and silk trousers.
              </div>

              <div className="grid grid-cols-2 gap-3 bg-white p-4 rounded-xl border border-[#1a1c1a]/5">
                <div>
                  <label className="block text-[#747878] uppercase text-[10px] font-semibold mb-1">
                    Chest / Bust
                  </label>
                  <input
                    type="text"
                    value={measurements.chest}
                    onChange={(e) => setMeasurements({ ...measurements, chest: e.target.value })}
                    className="w-full bg-[#faf9f6] border border-[#1a1c1a]/15 rounded-lg px-2.5 py-1.5 text-xs text-[#1a1c1a]"
                  />
                </div>
                <div>
                  <label className="block text-[#747878] uppercase text-[10px] font-semibold mb-1">
                    Shoulder Span
                  </label>
                  <input
                    type="text"
                    value={measurements.shoulder}
                    onChange={(e) => setMeasurements({ ...measurements, shoulder: e.target.value })}
                    className="w-full bg-[#faf9f6] border border-[#1a1c1a]/15 rounded-lg px-2.5 py-1.5 text-xs text-[#1a1c1a]"
                  />
                </div>
                <div>
                  <label className="block text-[#747878] uppercase text-[10px] font-semibold mb-1">
                    Sleeve Length
                  </label>
                  <input
                    type="text"
                    value={measurements.sleeve}
                    onChange={(e) => setMeasurements({ ...measurements, sleeve: e.target.value })}
                    className="w-full bg-[#faf9f6] border border-[#1a1c1a]/15 rounded-lg px-2.5 py-1.5 text-xs text-[#1a1c1a]"
                  />
                </div>
                <div>
                  <label className="block text-[#747878] uppercase text-[10px] font-semibold mb-1">
                    Inseam Drop
                  </label>
                  <input
                    type="text"
                    value={measurements.inseam}
                    onChange={(e) => setMeasurements({ ...measurements, inseam: e.target.value })}
                    className="w-full bg-[#faf9f6] border border-[#1a1c1a]/15 rounded-lg px-2.5 py-1.5 text-xs text-[#1a1c1a]"
                  />
                </div>
              </div>

              <p className="text-[11px] text-[#747878] text-center">
                Profile synchronized with Paris &amp; Milan cutting workshops.
              </p>
            </div>
          )}

          {activeTab === 'orders' && (
            <div className="space-y-3">
              <div className="p-3.5 bg-white rounded-xl border border-[#1a1c1a]/5 space-y-1.5">
                <div className="flex justify-between items-baseline">
                  <span className="font-serif text-sm text-[#1a1c1a]">
                    The Sculpted Cocoon Coat
                  </span>
                  <span className="font-semibold text-xs text-[#1a1c1a]">$620</span>
                </div>
                <div className="flex justify-between text-[11px] text-[#747878]">
                  <span>Order #ATL-09-4821</span>
                  <span className="text-[#8c4e36] font-semibold uppercase tracking-wider">
                    In Transit · DHL Express
                  </span>
                </div>
                <p className="text-[10px] text-[#747878] pt-1">
                  Numbered Lot #18 of 120 · Hand-basted in Biella wool
                </p>
              </div>

              <div className="p-3.5 bg-white rounded-xl border border-[#1a1c1a]/5 space-y-1.5">
                <div className="flex justify-between items-baseline">
                  <span className="font-serif text-sm text-[#1a1c1a]">
                    Folded Leather Envelope
                  </span>
                  <span className="font-semibold text-xs text-[#1a1c1a]">$240</span>
                </div>
                <div className="flex justify-between text-[11px] text-[#747878]">
                  <span>Order #ATL-08-3199</span>
                  <span className="text-[#444748]">Delivered</span>
                </div>
                <p className="text-[10px] text-[#747878] pt-1">
                  Full Grain Calf in Burnt Sienna · Tuscany
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
