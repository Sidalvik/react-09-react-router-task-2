import {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

/**
 * Кастомный хук получения данных с сервера
 * 
 * @param {string} url - url-адрес для запроса;
 * @param {Object} optsFetch  - опции fetch;
 * @param {function} afterOK  - функция вызываемая после получения положительного результата;
 * @param {function} afterError  - функция вызываемая после получения ошибки;
 * @param {function} after  - функция вызываемая после получения ошибки;
 * @returns {array} [data, error, loading, resetError, resetLoading]
 * data - полученные данные, 
 * error - ошибка (ошибка сети, ошибка ответа - если код не 20x, ошибка парсинга - если пришёл не JSON)
 * loading - boolean флаг, сигнализирующий о том, что загрузка идёт
 * resetData - функция сброса data,
 * resetError - функция сброса error,
 * resetLoading - функция сброса loading,
 */
function useJsonFetch(url, optsFetch, afterOK, afterError, afterFinally) {
    const [data, setData] = useState(undefined);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const resetError = () => setError(null);

    const resetData = () => setData(undefined);

    const resetLoading = () => setLoading(false);

    useEffect(() => {(async (url, optsFetch) => {
        setLoading(true);
        try {
            const response = await fetch(url, optsFetch);
            if (response.ok) {
                try {
                    const data = await response.json();
                    setData(data);
                    if (typeof afterOK === 'function') afterOK();
                } catch (error) {
                    setError(error);
                    if (typeof afterError === 'function') afterError();
                }
            } else {
                setError(new Error(response.statusText));
                if (typeof afterError === 'function') afterError();
            }
        } catch (error) {
            setError(error);
            if (typeof afterError === 'function') afterError();
        } finally {
            setLoading(false);
            if (typeof afterFinally === 'function') afterFinally();
        }
    })(url, optsFetch)}, [url, optsFetch, afterOK, afterError, afterFinally]);

    return [data, error, loading, resetData, resetError, resetLoading];
}

useJsonFetch.propTypes = {
    url: PropTypes.string.isRequired,
    optsFetch: PropTypes.array,
    afterOk: PropTypes.func,
    afterError: PropTypes.func,
    afterFinally: PropTypes.func,
    dep: PropTypes.array,
}

export default useJsonFetch
