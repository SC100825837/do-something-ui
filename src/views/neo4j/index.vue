<template>
  <div id="mountNode"></div>
</template>
<script>
    import G6 from "@antv/g6";
    export default {
        name: "antV",
        data() {
            return {
                data: {}
            };
        },
        computed: {},
        methods: {
            init() {
                const container = document.getElementById('mountNode');
                const width = container.scrollWidth;
                // const height = container.scrollHeight || 700;
                const height = 1500;
                console.log("height width",height, "--------", width)
                const graph = new G6.TreeGraph({
                    container: 'mountNode',
                    width,
                    height,
                    linkCenter: true,
                    modes: {
                        default: [
                            {
                                type: 'collapse-expand',
                                onChange: function onChange(item, collapsed) {
                                    const data = item.get('model');
                                    data.collapsed = collapsed;
                                    return true;
                                },
                            },
                            'drag-canvas',
                            'zoom-canvas',
                        ],
                    },
                    defaultNode: {
                        size: 26,
                    },
                    layout: {
                        type: 'compactBox',
                        direction: 'RL',
                        getId: function getId(d) {
                            return d.id;
                        },
                        getHeight: () => {
                            return 26;
                        },
                        getWidth: () => {
                            return 26;
                        },
                        getVGap: () => {
                            return 20;
                        },
                        getHGap: () => {
                            return 30;
                        },
                        radial: true,
                    },
                });

                graph.node(function (node) {
                    return {
                        label: node.id,
                    };
                });

                graph.data(this.data);
                graph.render();
                graph.fitView();

                if (typeof window !== 'undefined')
                    window.onresize = () => {
                        if (!graph || graph.get('destroyed')) return;
                        if (!container || !container.scrollWidth || !container.scrollHeight) return;
                        graph.changeSize(container.scrollWidth, container.scrollHeight);
                    };
            }
        },
        mounted() {
            this.$api.neo4j.test().then(res => {
                this.data = res.data
                //生命周期
                this.$nextTick(() => {
                    this.init();
                });
            })

        }
    };
</script>
