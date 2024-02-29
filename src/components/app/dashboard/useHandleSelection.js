import {useRoute} from "vue-router";

export function useHandleSelection(pageContentsStore) {
    const route = useRoute();
    const handleSelection = (selectedItem) => {
        let item = {};

        switch (selectedItem.type) {
            case 'text':
                item = {
                    type: selectedItem.type,
                    page_id: route.params.pageId,
                    content: {
                        text: '',
                        attributes: {
                            color: 'rgba(0,0,0,0.56)',
                        }
                    }
                };
                break;
            case 'quote':
                item = {
                    type: selectedItem.type,
                    page_id: route.params.pageId,
                    content: {
                        title: {
                            text: '',
                            attributes: {
                                color: '#ffffff',
                                alignment: 'left',
                                bold: true,
                            }
                        },
                        text: {
                            text: '',
                            attributes: {
                                color: '#ffffff',
                                alignment: 'center',
                            }
                        }
                    }
                };
                break;
            case 'image':
                item = {
                    type: selectedItem.type,
                    page_id: route.params.pageId,
                    content: {
                        text: '',
                        attributes: {
                            color: '#000000',
                        }
                    }
                };
                break;
        }

        pageContentsStore.putNewItem(item);
    };

    return { handleSelection };
}
