<Ordenar los objetos que estan creados>

11-11-2026
Giovanny Guerra
Gemini
Iniciar_partido.html

Pront 1:
Tengo este html, quiero que me ayudes a colocar bien las cosas,quieo que el 24:00 este al centro, que el equipo local y visita esten abajo que el 24:00 y que esten uno al lado del otro, y por ultimo ordename los botones P uno al lado izq y otro al der:

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Iniciar Partido</title>
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
    
    <script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>
</head>
<body class="bg-black min-h-screen flex items-center justify-center p-4">
<section class="w-full max-w-5xl h-[500px] bg-zinc-950 border-4 border-zinc-800 rounded-xl p-6 shadow-2xl flex flex-col justify-between">

<button class="w-14 h-14 rounded-full border-2 border-zinc-400 text-zinc-300 font-bold text-xl"> P</button>


<p class="text-red-600 text-7xl md:text-6xl font-bold">24 : 00</p>

<section class="bg-zinc-950 border-2 border-zinc-700 rounded-xl p-4 inline-flex w-fit flex-col items-center space-y-2 shadow-2xl">
        <p class="text-zinc-300 text-sm font-semibold uppercase tracking-wider">Equipo local</p>
        <p class="text-amber-500 text-6xl md:text-4xl font-bold">00</p>
        </p> 
    </section>
    
    <section class="bg-zinc-950 border-2 border-zinc-700 rounded-xl p-4 inline-flex w-fit flex-col items-center space-y-2 shadow-2xl">
        <p class="text-zinc-300 text-sm font-semibold uppercase tracking-wider">Equipo visita</p>
            <p class="text-amber-500 text-6xl md:text-4xl font-bold">00</p>
    </p> 
    </section>
</section>


<button class="w-14 h-14 rounded-full border-2 border-zinc-400 text-zinc-300 font-bold text-xl">P</button>

</section>
</body>
    

</html>

Respuesta 1:
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Iniciar Partido</title>
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
    <script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>
</head>
<body class="bg-black min-h-screen flex items-center justify-center p-4">

    <section class="w-full max-w-5xl h-[500px] bg-zinc-950 border-4 border-zinc-800 rounded-xl p-6 shadow-2xl flex flex-col justify-between items-center">
        
        <div class="w-full flex justify-between items-center">
            <button class="w-14 h-14 rounded-full border-2 border-zinc-400 text-zinc-300 font-bold text-xl cursor-pointer hover:bg-zinc-800">P</button>
            <button class="w-14 h-14 rounded-full border-2 border-zinc-400 text-zinc-300 font-bold text-xl cursor-pointer hover:bg-zinc-800">P</button>
        </div>

        <!-- Centro: Reloj 24:00 -->
        <div class="text-center">
            <p class="text-red-600 text-7xl md:text-8xl font-bold tracking-wider">24 : 00</p>
        </div>

        <!-- Fila inferior: Equipos lado a lado -->
        <div class="w-full flex justify-center gap-8 items-center">
            <!-- Equipo Local -->
            <section class="bg-zinc-950 border-2 border-zinc-700 rounded-xl p-4 flex flex-col items-center space-y-2 shadow-2xl min-w-[160px]">
                <p class="text-zinc-300 text-sm font-semibold uppercase tracking-wider">Equipo local</p>
                <p class="text-amber-500 text-6xl md:text-5xl font-bold">00</p>
            </section>
            
            <!-- Equipo Visita -->
            <section class="bg-zinc-950 border-2 border-zinc-700 rounded-xl p-4 flex flex-col items-center space-y-2 shadow-2xl min-w-[160px]">
                <p class="text-zinc-300 text-sm font-semibold uppercase tracking-wider">Equipo visita</p>
                <p class="text-amber-500 text-6xl md:text-5xl font-bold">00</p>
            </section>
        </div>

    </section>

</body>
</html>

(Finalmente movi los botones a la izq y der de equipo local y visita, al igual que centre mas las cosas)