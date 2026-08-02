function StatisticCard({ title, value, icon, bgColor }) {
   return (
     <div
       className="rounded-xl shadow-md p-6 text-white transition duration-300 hover:scale-105"
       style={{ backgroundColor: bgColor }}
     >
       <div className="flex justify-between items-center">
         <div>
           <h3 className="text-sm opacity-80">{title}</h3>

           <p className="text-3xl font-bold mt-2">{value}</p>
         </div>

         <div className="text-4xl">{icon}</div>
       </div>
     </div>
   );
}

export default StatisticCard;
