'use client'

import React, { useState } from 'react';

interface BirthData {
  date: string;
  time: string;
  country: string;
}

interface Horoscope {
  sunSign: string;
  moonSign: string;
  ascendant: string;
  mercury: string;
  venus: string;
  mars: string;
  jupiter: string;
  saturn: string;
  uranus: string;
  neptune: string;
  pluto: string;
}

interface Errors {
  date?: string;
  time?: string;
  country?: string;
}

const useForm = (initialState: BirthData) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState<Errors>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const validate = () => {
    let tempErrors: Errors = {};
    if (!values.date) tempErrors.date = 'Η ημερομηνία είναι υποχρεωτική';
    if (!values.time) tempErrors.time = 'Η ώρα είναι υποχρεωτική';
    if (!values.country) tempErrors.country = 'Η χώρα είναι υποχρεωτική';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  return { values, errors, handleChange, validate };
};

// Comprehensive list of countries
const countries = [
  'Αφγανιστάν',
  'Αλβανία',
  'Αλγερία',
  'Ανδόρα',
  'Ανγκόλα',
  'Αντίγκουα και Μπαρμπούντα',
  'Αργεντινή',
  'Αρμενία',
  'Αυστραλία',
  'Αυστρία',
  'Αζερμπαϊτζάν',
  'Μπαχάμες',
  'Μπαχρέιν',
  'Μπανγκλαντές',
  'Μπαρμπάντος',
  'Λευκορωσία',
  'Βέλγιο',
  'Μπελίζ',
  'Μπενίν',
  'Μπουτάν',
  'Βολιβία',
  'Βοσνία και Ερζεγοβίνη',
  'Μποτσουάνα',
  'Βραζιλία',
  'Μπρουνέι',
  'Βουλγαρία',
  'Μπουρκίνα Φάσο',
  'Μπουρούντι',
  'Καμπότζη',
  'Καμερούν',
  'Καναδάς',
  'Πράσινο Ακρωτήριο',
  'Κεντροαφρικανική Δημοκρατία',
  'Τσαντ',
  'Χιλή',
  'Κίνα',
  'Κολομβία',
  'Κομόρες',
  'Κονγκό (Δημοκρατία)',
  'Κονγκό (Λαϊκή Δημοκρατία)',
  'Κόστα Ρίκα',
  'Ακτή Ελεφαντοστού',
  'Κροατία',
  'Κούβα',
  'Κύπρος',
  'Τσεχία',
  'Δανία',
  'Τζιμπουτί',
  'Δομινίκα',
  'Δομινικανή Δημοκρατία',
  'Εκουαδόρ',
  'Αίγυπτος',
  'Ελ Σαλβαδόρ',
  'Ισημερινή Γουινέα',
  'Ερυθραία',
  'Εσθονία',
  'Εσουατίνι',
  'Αιθιοπία',
  'Φίτζι',
  'Φινλανδία',
  'Γαλλία',
  'Γκαμπόν',
  'Γκάμπια',
  'Γεωργία',
  'Γερμανία',
  'Γκάνα',
  'Ελλάδα',
  'Γρενάδα',
  'Γουατεμάλα',
  'Γουινέα',
  'Γουινέα-Μπισάου',
  'Γουιάνα',
  'Αϊτή',
  'Ονδούρα',
  'Ουγγαρία',
  'Ισλανδία',
  'Ινδία',
  'Ινδονησία',
  'Ιράν',
  'Ιράκ',
  'Ιρλανδία',
  'Ισραήλ',
  'Ιταλία',
  'Τζαμάικα',
  'Ιαπωνία',
  'Ιορδανία',
  'Καζακστάν',
  'Κένυα',
  'Κιριμπάτι',
  'Βόρεια Κορέα',
  'Νότια Κορέα',
  'Κόσοβο',
  'Κουβέιτ',
  'Κιργιζία',
  'Λάος',
  'Λετονία',
  'Λίβανος',
  'Λεσότο',
  'Λιβερία',
  'Λιβύη',
  'Λιχτενστάιν',
  'Λιθουανία',
  'Λουξεμβούργο',
  'Μαδαγασκάρη',
  'Μαλάουι',
  'Μαλαισία',
  'Μαλδίβες',
  'Μάλι',
  'Μάλτα',
  'Μαυριτανία',
  'Μαυρίκιος',
  'Μεξικό',
  'Μικρονησία',
  'Μολδαβία',
  'Μονακό',
  'Μογγολία',
  'Μαυροβούνιο',
  'Μαρόκο',
  'Μοζαμβίκη',
  'Μιανμάρ (Βιρμανία)',
  'Ναμίμπια',
  'Ναουρού',
  'Νεπάλ',
  'Ολλανδία',
  'Νέα Ζηλανδία',
  'Νικαράγουα',
  'Νίγηρας',
  'Νιγηρία',
  'Βόρεια Μακεδονία',
  'Νορβηγία',
  'Ομάν',
  'Πακιστάν',
  'Παλάου',
  'Παναμάς',
  'Παπούα Νέα Γουινέα',
  'Παραγουάη',
  'Περού',
  'Φιλιππίνες',
  'Πολωνία',
  'Πορτογαλία',
  'Κατάρ',
  'Ρουμανία',
  'Ρωσία',
  'Ρουάντα',
  'Άγιος Χριστόφορος και Νέβις',
  'Άγιος Λουκιανός',
  'Άγιος Βικέντιος και Γρεναδίνες',
  'Σαμόα',
  'Σαν Μαρίνο',
  'Σάο Τομέ και Πρίνσιπε',
  'Σαουδική Αραβία',
  'Σενεγάλη',
  'Σερβία',
  'Σεϋχέλλες',
  'Σιέρα Λεόνε',
  'Σιγκαπούρη',
  'Σλοβακία',
  'Σλοβενία',
  'Νήσοι Σολομώντα',
  'Σομαλία',
  'Νότια Αφρική',
  'Νότιο Σουδάν',
  'Ισπανία',
  'Σρι Λάνκα',
  'Σουδάν',
  'Σουρινάμ',
  'Σουηδία',
  'Ελβετία',
  'Συρία',
  'Ταϊβάν',
  'Τατζικιστάν',
  'Τανζανία',
  'Ταϊλάνδη',
  'Τιμόρ-Λέστε',
  'Τόγκο',
  'Τόνγκα',
  'Τρινιντάντ και Τομπάγκο',
  'Τυνησία',
  'Τουρκία',
  'Τουρκμενιστάν',
  'Τουβαλού',
  'Ουγκάντα',
  'Ουκρανία',
  'Ηνωμένα Αραβικά Εμιράτα',
  'Ηνωμένο Βασίλειο',
  'Ηνωμένες Πολιτείες Αμερικής',
  'Ουρουγουάη',
  'Ουζμπεκιστάν',
  'Βανουάτου',
  'Βατικανό',
  'Βενεζουέλα',
  'Βιετνάμ',
  'Υεμένη',
  'Ζάμπια',
  'Ζιμπάμπουε',
];

export default function HoroscopeCalculatorPage() {
  const { values, errors, handleChange, validate } = useForm({
    date: '',
    time: '',
    country: '',
  });
  const [horoscope, setHoroscope] = useState<Horoscope | null>(null);
  const [loading, setLoading] = useState(false);

  const calculateHoroscope = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setLoading(true);
      // Simulate API call
      try {
        await new Promise(resolve => setTimeout(resolve, 2000));
        setHoroscope({
          sunSign: 'Κριός',
          moonSign: 'Σκορπιός',
          ascendant: 'Λέων',
          mercury: 'Ταύρος',
          venus: 'Δίδυμοι',
          mars: 'Καρκίνος',
          jupiter: 'Παρθένος',
          saturn: 'Ζυγός',
          uranus: 'Τοξότης',
          neptune: 'Αιγόκερως',
          pluto: 'Υδροχόος'
        });
      } catch (error) {
        console.error('Error calculating horoscope:', error);
        alert('Υπήρξε ένα σφάλμα κατά τον υπολογισμό του ωροσκοπίου. Παρακαλώ δοκιμάστε ξανά.');
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center text-purple-900">Υπολογισμός Ωροσκοπίου</h1>
      
      <form onSubmit={calculateHoroscope} className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label htmlFor="date" className="block text-gray-700 font-bold mb-2">Ημερομηνία Γέννησης</label>
          <input
            type="date"
            id="date"
            name="date"
            value={values.date}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-purple-500 ${errors.date ? 'border-red-500' : ''}`}
          />
          {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="time" className="block text-gray-700 font-bold mb-2">
            Ώρα Γέννησης (00:00-23:59)
          </label>
          <input
            type="time"
            id="time"
            name="time"
            value={values.time}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-purple-500 ${errors.time ? 'border-red-500' : ''}`}
          />
          {errors.time && <p className="text-red-500 text-sm mt-1">{errors.time}</p>}
        </div>
        <div className="mb-6">
          <label htmlFor="country" className="block text-gray-700 font-bold mb-2">Χώρα Γέννησης</label>
          <select
            id="country"
            name="country"
            value={values.country}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-purple-500 ${errors.country ? 'border-red-500' : ''}`}
          >
            <option value="">Επιλέξτε χώρα</option>
            {countries.map((country, index) => (
              <option key={index} value={country}>{country}</option>
            ))}
          </select>
          {errors.country && <p className="text-red-500 text-sm mt-1">{errors.country}</p>}
        </div>
        <button 
          type="submit" 
          className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors disabled:bg-purple-300"
          disabled={loading}
        >
          {loading ? 'Υπολογισμός...' : 'Υπολογισμός Ωροσκοπίου'}
        </button>
      </form>

      {horoscope && (
        <div className="mt-8 max-w-md mx-auto bg-purple-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-purple-900">Το Ωροσκόπιό σας</h2>
          <div className="grid grid-cols-2 gap-4">
            <p><strong>Ήλιος:</strong> {horoscope.sunSign}</p>
            <p><strong>Σελήνη:</strong> {horoscope.moonSign}</p>
            <p><strong>Ωροσκόπος:</strong> {horoscope.ascendant}</p>
            <p><strong>Ερμής:</strong> {horoscope.mercury}</p>
            <p><strong>Αφροδίτη:</strong> {horoscope.venus}</p>
            <p><strong>Άρης:</strong> {horoscope.mars}</p>
            <p><strong>Δίας:</strong> {horoscope.jupiter}</p>
            <p><strong>Κρόνος:</strong> {horoscope.saturn}</p>
            <p><strong>Ουρανός:</strong> {horoscope.uranus}</p>
            <p><strong>Ποσειδώνας:</strong> {horoscope.neptune}</p>
            <p><strong>Πλούτωνας:</strong> {horoscope.pluto}</p>
          </div>
        </div>
      )}
    </div>
  );
}
