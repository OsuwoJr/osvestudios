<script lang="ts">
    export let text: string;
    export let link: string = "";
    export let email: string = "";
    export let phone: string = "";
    export let download: boolean = false;
    
    // Generate the appropriate href based on provided props
    let href = email 
        ? `mailto:${email}?subject=Hello&body=Hi%20there,%0D%0A%0D%0AI%27m%20reaching%20out%20regarding...`
        : phone 
        ? `tel:${phone}` 
        : link;
</script>

<a 
    class="relative overflow-hidden px-4 md:px-6 py-2 text-lg font-medium rounded-full bg-white hover:bg-[#00BFFF] text-slate-950 hover:text-white border border-transparent transition-all duration-300 ease-in-out focus:outline-none hover:border-[#0099CC] active:scale-95"
    href={href}
    target={link && !download ? "_blank" : undefined}
    rel={link && !download ? "noopener noreferrer" : undefined}
    aria-label={text}
    download={download ? "" : undefined}
>
    {text}
</a>
