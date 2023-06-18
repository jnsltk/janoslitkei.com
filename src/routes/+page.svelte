<script>
	import About from "../lib/About.svelte";
	import Contact from "../lib/Contact.svelte";
    import Header from "../lib/Header.svelte";
	import Hero from "../lib/Hero.svelte";
	import Projects from "../lib/Projects.svelte";
	import Sidebar from "../lib/Sidebar.svelte";

</script>

<div>
    <Header />
    <Sidebar />

    <div class="ml-80 h-screen snap-always snap-mandatory snap-y overflow-y-auto">
        <Hero />
        <About />
        <Projects />
        <Contact />
    </div>
</div>