<template>
    <div class="component--header banner">
        <div class="cornerInfo">
            {{cornertext}}
            <div class="theme">
                <select @change="themeChange" v-model="theme">
                    <option value="light">Light</option>
                    <option value="dark">Dark</option>
                </select>
            </div>
        </div>
        <span class="title">{{title}}</span>
    </div>
</template>

<script>
export default {
    name: 'page-header',
    props: ['title', 'cornertext'],
    data: () => {return {
        theme: window.localStorage.getItem('theme'),
    }},
    methods: {
        themeChange(event) {
            localStorage.setItem('theme', event.srcElement.value);
            this.addCss('./dist/'+localStorage.getItem('theme')+'.css');
        },

        addCss(fileName) {
            let oldStyle = document.getElementById('themeImport');
            if(oldStyle) oldStyle.remove();

            let link = document.createElement("link");
        
            link.type = "text/css";
            link.rel = "stylesheet";
            link.href = fileName;
            link.id = "themeImport";
        
            document.head.appendChild(link);
        }
    }
}
</script>