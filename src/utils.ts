export const countChar = (text: string): number | undefined  => {
    if (text.length > 0) {
        let count = text.replace(/\s/g, "");
        return count.length;
    }
};

export const countWord = (text: string): number | undefined  => {
    if (text.length > 0) {
        let count = text.split(/\s+/);
        return count.length - 1;
    }
};

export const countPro = (text: string): number   => {
    let pronouns: string[] = ['i', 'we', 'you', 'he', 'she', 'it', 'they', 'me', 'us', 'her', 'him', 'them', 'mine', 'ours', 'yours', 'hers', 'his', 'theirs', 'myself', 'yourself', 'herself', 'himself', 'itself', 'ourselves', 'yourselves', 'themselves'];
    let split = text.split(/\s+/);
    return split.map((item) => item.toLowerCase()).filter((item) => pronouns.includes(item)).length;
};

export const countRead = (text: string): number | undefined  => {
    if (text.length > 0) {
        let length = text.length;
        let counter = 0;
        for (let i = 0; i <= length; i++) {
            if (i % 800 === 0) {
                counter++;
            }
        }
        return counter;
    }
};

export const longWord = (text: string): string | undefined => {
    if (text.length > 0) {
        let replace1 = text.replace(/\./, " ");
        let replace2 = replace1.replace(/\?/, " ");
        let replace3 = replace2.replace(/:/, " ");
        let replace4 = replace3.replace(/;/, " ");
        let replace5 = replace4.replace(/,/, " ");
        let replace6 = replace5.replace(/!/, " ");
        let split = replace6.split(/\s+/).sort((a, b) => b.length - a.length);
        return split[0];
    }
};

export const countPara = (text: string): number => {
    let count = text.replace(/\n$/gm, '').split(/\n/).length;
    return count;
};

export const countSent=(text: string): number =>{
    let result=text.split(/[.]/gi);
    let count=result.filter((item)=>item!=="");
    return count.length
}

